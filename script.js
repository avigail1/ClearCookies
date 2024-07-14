document.getElementById('clearCookiesButton').addEventListener('click', function() {
    // קבלת כל העוגיות של הדומיין הנוכחי
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        // ניקוי העוגיה ע"י הגדרה שלה לפגת תוקף בעבר
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    chrome.cookies.getAll({ url: "https://new.mishnatyosef.org/" }, function(cookies) {
    for (let cookie of cookies) {
      chrome.cookies.remove({ url: "https://new.mishnatyosef.org/", name: cookie.name });
    }
  });
    
    alert("העוגיות נמחקו בהצלחה!");
    
    // הפניה לדף האמיתי
    window.location.href = "https://new.mishnatyosef.org/";
});
