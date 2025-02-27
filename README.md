# Cookie Cleaner

This repository contains a simple HTML file designed to help customers clear cookies for your website. The file includes a button that, when clicked, will clear all cookies associated with the domain.

## How to Use

1. **Upload the HTML file to a server or hosting service**:
    - You can use services like GitHub Pages, Netlify, Google Drive, Amazon S3, or any other hosting service to make the HTML file accessible online.

2. **Share the link**:
    - Once the HTML file is hosted, share the link with your customers who are experiencing login issues due to cookies.

3. **Instructions for Customers**:
    - When customers visit the provided link, they will see a button labeled "נקה עוגיות".
    - They simply need to click the button to clear the cookies for your website.
    - After clearing the cookies, they should be able to log in without any issues.

## HTML File Contents

The HTML file includes a simple script to clear cookies:

```html
<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ניקוי עוגיות</title>
</head>
<body>
    <h1>ניקוי עוגיות לאתר שלנו</h1>
    <button id="clearCookiesButton">נקה עוגיות</button>

    <script>
        document.getElementById('clearCookiesButton').addEventListener('click', function() {
            // Get all cookies of the current domain
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                // Clear the cookie by setting its expiration date to a past date
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            }
            
            alert("העוגיות נמחקו בהצלחה!");
        });
    </script>
</body>
</html>
