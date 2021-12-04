<template>
    <footer class="footer">
        <div class="content footer-content has-text-centered">
            <p>Maxim Evchenko © 2021</p>
            <p>
                <a href="Skype:appmagixe?chat"><i class="icofont-skype footer-icon"></i></a>
                <a href="https://vk.com/max_magixe"><i class="icofont-vk footer-icon"></i></a>
                <a href="https://telegram.me/max_magixe"><i class="icofont-telegram footer-icon"></i></a>
            </p>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer-content {
    margin-top: 4rem;
}
.footer {
    background: linear-gradient(135deg, rgb(84, 158, 255), rgb(0, 110, 255));
    color: white;
    -webkit-clip-path: polygon(50% 25%, 100% 0, 100% 100%, 0 100%, 0 0); 
    clip-path: polygon(50% 25%, 100% 0, 100% 100%, 0 100%, 0 0);
}
.footer a {
    color: rgb(84, 158, 255);
    font-size: 2rem;
    margin: .5rem;
}
.footer a:hover {
    color: rgb(255, 255, 255);
}
</style>