<?php
// display header function with one parameter "title"
  function header($title){
    echo'<!doctype html>';
    echo'<html lang="en">';
    
    echo'<head>';
      echo'<meta charset="utf-8">';
      echo'<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">';
      echo'<meta name="theme-color" content="#000000">';
      
          // provides metadata used when your web app is added to the homescreen on Android.
          // See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/

      echo'<link rel="manifest" href="%PUBLIC_URL%/manifest.json">';
      echo'<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">';
      
          // Notice the use of %PUBLIC_URL% in the tags above.
          // It will be replaced with the URL of the `public` folder during the build.
          // Only files inside the `public` folder can be referenced from the HTML.
      
      echo"<title>" . $title . "</title>";
    echo'</head>';
    echo'<body>';
  }
// display footer function with one parameter "author"
  function footer($author){
    echo '<footer>';
    echo "<p>" . "Copyright &copy; ". date("Y") . " " . $author ."</p>";
    echo '</footer>';
    echo '</body>';
    echo '</html>';
  }