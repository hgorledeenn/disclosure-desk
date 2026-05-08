// ================================================================
// STORE — localStorage data layer
// Requires data.js to be loaded first (uses MOCK_REQUESTS to seed).
// ================================================================
(function () {

  var REQUESTS_KEY = 'dd-requests';
  var USER_KEY     = 'dd-user';
  var SEEDED_KEY   = 'dd-seeded';

  // ── Internal helpers ───────────────────────────────────────────
  function _load() {
    try { return JSON.parse(sessionStorage.getItem(REQUESTS_KEY)) || []; }
    catch (e) { return []; }
  }

  function _save(reqs) {
    sessionStorage.setItem(REQUESTS_KEY, JSON.stringify(reqs));
  }

  function _seed() {
    if (sessionStorage.getItem(SEEDED_KEY)) return;
    if (typeof MOCK_REQUESTS !== 'undefined') _save(MOCK_REQUESTS);
    sessionStorage.setItem(SEEDED_KEY, '1');
  }

  // ── Public API ─────────────────────────────────────────────────
  function getRequests() {
    _seed();
    return _load();
  }

  function getRequest(id) {
    return getRequests().find(function (r) {
      return String(r.id) === String(id);
    });
  }

  function saveRequest(req) {
    var reqs = _load();
    var idx = reqs.findIndex(function (r) { return String(r.id) === String(req.id); });
    if (idx >= 0) { reqs[idx] = req; } else { reqs.unshift(req); }
    _save(reqs);
  }

  function deleteRequest(id) {
    _save(_load().filter(function (r) { return String(r.id) !== String(id); }));
  }

  function addNote(id, text) {
    var reqs = _load();
    var idx = reqs.findIndex(function (r) { return String(r.id) === String(id); });
    if (idx < 0) return null;
    if (!Array.isArray(reqs[idx].notes)) reqs[idx].notes = [];
    reqs[idx].notes.push({ date: new Date().toISOString().slice(0, 10), text: text });
    _save(reqs);
    return reqs[idx];
  }

  function updateStatus(id, status) {
    var reqs = _load();
    var idx = reqs.findIndex(function (r) { return String(r.id) === String(id); });
    if (idx < 0) return null;
    reqs[idx].status = status;
    _save(reqs);
    return reqs[idx];
  }

  function nextId() {
    var max = _load().reduce(function (m, r) {
      var n = parseInt(r.id);
      return isNaN(n) ? m : Math.max(m, n);
    }, 0);
    return max + 1;
  }

  function getUser() {
    try { return JSON.parse(sessionStorage.getItem(USER_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveUser(u) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(u));
  }

  function clearAll() {
    sessionStorage.removeItem(REQUESTS_KEY);
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(SEEDED_KEY);
  }

  function updateUserDisplay() {
    var u        = getUser();
    var name     = u.fullName || 'Jane Doe';
    var email    = u.email    || 'jane@example.com';
    var words    = name.trim().split(/\s+/).filter(Boolean);
    var initials = words.map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase() || 'JD';

    function setText(id, val) {
      var el = document.getElementById(id);
      if (el) el.textContent = val;
    }
    setText('sidebar-user-name',     name);
    setText('sidebar-user-email',    email);
    setText('sidebar-user-initials', initials);
    setText('notif-user-email',      email);
  }

  document.addEventListener('DOMContentLoaded', updateUserDisplay);

  window.Store = {
    getRequests:       getRequests,
    getRequest:        getRequest,
    saveRequest:       saveRequest,
    deleteRequest:     deleteRequest,
    addNote:           addNote,
    updateStatus:      updateStatus,
    nextId:            nextId,
    getUser:           getUser,
    saveUser:          saveUser,
    clearAll:          clearAll,
    updateUserDisplay: updateUserDisplay,
  };

})();
