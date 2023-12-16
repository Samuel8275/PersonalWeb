function cargarFooter() {
    let foo = document.getElementById("foo");

    foo.innerHTML += '<div class="container"> <div class="footer-content"><div class="footer-section1"><h4>Contacto</h4><p>Contáctanos para cualquier consulta o asistencia.</p><p>Email: info@handgripshop.com</p><p>Teléfono: +34 123 456 789</p></div><div class="footer-section2"><h4>Enlaces Rápidos</h4><ul class="footer__ul"><li class="footer__ul-li"><a href="index.html">Inicio</a></li><li class="footer__ul-li"><a href="productos.html">Productos</a></li><li class="footer__ul-li"><a href="contacto.html">Contáctanos</a></li></ul></div><div class="footer-section3"><h4>Redes Sociales</h4><ul class="footer__ul"><li class="footer__ul-li"><i class="fa-brands fa-github"></i><a href="https://github.com/Samuel8275" target="_blank">Github</a></li> <!-- Enlace externo. --><li class="footer__ul-li"><i class="fa-brands fa-x-twitter"></i><a href="https://twitter.com/sasa8275" target="_blank">Twitter</a></li><li class="footer__ul-li"><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/6730_samuel/" target="_blank">Instagram</a></li></ul></div></div><div class="footer-bottom"><p>&copy; 2023 HandGripShop - Todos los derechos reservados</p> <!-- Copyright --></div></div>'
}

function cargarFooter2() {
    let foo2 = document.getElementById("foo2");

    foo2.innerHTML += '<div class="container"> <div class="footer-content"><div class="footer-section1"><h4>Contacto</h4><p>Contáctanos para cualquier consulta o asistencia.</p><p>Email: info@handgripshop.com</p><p>Teléfono: +34 123 456 789</p></div><div class="footer-section2"><h4>Enlaces Rápidos</h4><ul class="footer__ul"><li class="footer__ul-li"><a href="../index.html">Inicio</a></li><li class="footer__ul-li"><a href="../productos.html">Productos</a></li><li class="footer__ul-li"><a href="../contacto.html">Contáctanos</a></li></ul></div><div class="footer-section3"><h4>Redes Sociales</h4><ul class="footer__ul"><li class="footer__ul-li"><div class="fa-brands fa-github"></div><a href="https://github.com/Samuel8275" target="_blank">Github</a></li> <!-- Enlace externo. --><li class="footer__ul-li"><i class="fa-brands fa-x-twitter"></i><a href="https://twitter.com/sasa8275" target="_blank">Twitter</a></li><li class="footer__ul-li"><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/6730_samuel/" target="_blank">Instagram</a></li></ul></div></div><div class="footer-bottom"><p>&copy; 2023 HandGripShop - Todos los derechos reservados</p> <!-- Copyright --></div></div>'
}

function cargarNav() {
    let nav = document.getElementById("nav");

    nav.innerHTML += '<ul class="nav__ul"><li class="nav__ul-li active1"><a href="index.html">Inicio</a></li><li class="nav__ul-li active2"><a href="productos.html">Productos</a></li><li class="nav__ul-li active3"><a href="contacto.html">Contacto</a></li></ul><a href="login/inicia.html"><img src="img/logo.jpeg" alt="hand grip"></a>'
}

function cargarNav2() {
    let nav2 = document.getElementById("nav2");

    nav2.innerHTML += '<ul class="nav__ul"><li class="nav__ul-li"><a href="../index.html">Inicio</a></li><li class="nav__ul-li active2"><a href="../productos.html">Productos</a></li><li class="nav__ul-li"><a href="../contacto.html">Contacto</a></li></ul><a href="../login/inicia.html"><img src="../img/logo.jpeg" alt="hand grip"></a>'
}

onload(cargarFooter(), cargarNav());
