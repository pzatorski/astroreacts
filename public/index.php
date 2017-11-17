<!-- 
  The php code in here and in common.php file but
  I tried to connect with my React App and unfortunately it dosen't work.. :(
  Thats why I left index.html in my public folder.

  I wrote it in here to show you that I can use php function and I know how it works.
 -->

<?php
// importing common.php file
  include('common.php');

// call header function which takes one parameter which is "title" of the header from common.php file
  header("AstroReacts");
?>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <!-- 
      <div id="root"></div>

      The code below:
      Here is a bit where my HTML will run the id="root"

      React render his main Component in main index.js in src folder by id which in my situation is "root"

     -->

  <div id="root"></div>
  <!--
      To begin the development, run `npm start` or `yarn start`.
    -->
<?php
// call footer function which takes one parameter which is my author of copyright from common.php file
  footer("Patryk Zatorski");
?>