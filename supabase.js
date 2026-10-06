// Supabase connection for the portfolio (public publishable key - safe in browser)
(function () {
  var SUPABASE_URL = "https://uvkphtoueztjgvulbphh.supabase.co";
  var SUPABASE_KEY = "sb_publishable_xL9T_xx-GaDwnZqd9PNxzQ_v5aANP0_";
  if (window.supabase && window.supabase.createClient) {
    window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("Supabase connected");
  }
})();
