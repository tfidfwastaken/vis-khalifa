<html>
    <body>
        <?php
        $var1 = $_POST["newsletterName"];
        $var2 = $_POST["newsletterEmail"];
        echo $var1, $var2;
        header('Location: index.html');
        ?>
    </body>
</html>