<template>
  <section>
    <div class="container">
      <nav
        class="navbar navbar-expand-xl navbar-dark"
        aria-label="Sixth navbar example"
      >
        <div class="container-fluid">
          <a
            href="#"
            class="
              d-flex
              align-items-center
              col-md-3
              mb-2 mb-md-0
              text-dark text-decoration-none
            "
          >
            <img src="../assets/img/logo.png" alt="Vidia" width="60px" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="menu-btn" :class="{ show: isToogle }" @click="toogle()">
              <div class="menu-btn__burger"></div>
            </div>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample06">
            <ul class="navbar-nav me-auto mb-2 mb-xl-0">
              <li>
                <a href="#" class="nav-link px-2 link-secondary">Início</a>
              </li>
              <li><a href="#" class="nav-link px-2 link-dark">Cirugia</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Sobre nós</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Notícias</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Dúvidas</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Contato</a></li>
            </ul>
            <div class="col-md-3 text-end right-menu">
              <button type="button" class="login-btn">
                <i class="fas fa-lock"></i>Acessar minha conta
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="b-example-divider"></div>
  </section>
</template>
<script>
export default {
  name: "vue-fixed-header",
  data() {
    return {
      isToogle: false,
    };
  },
  methods: {
    toogle() {
      this.isToogle = !this.isToogle;
      console.log(this.isToogle);
    },
  },
};
</script>
