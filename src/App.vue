<template>
  <div id="app">
    <!--Header-->
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
              <img src="./assets/img/logo.png" alt="Vidia" width="60px" />
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
              <div
                class="menu-btn"
                :class="{ show: isToogle }"
                @click="toogle()"
              >
                <div class="menu-btn__burger"></div>
              </div>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample06">
              <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                <li>
                  <a href="#" class="nav-link px-2 link-secondary text-dark"
                    >Início</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-dark text-dark"
                    >Cirugia</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-dark text-dark"
                    >Sobre nós</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-dark text-dark"
                    >Notícias</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-dark text-dark"
                    >Dúvidas</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-dark text-dark"
                    >Contato</a
                  >
                </li>
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
    <!--close header-->
    <!--SHowcase-->
    <section class="showcase-area">
      <div class="container">
        <div class="showcase-container">
          <div class="showcase"></div>
          <div class="location-container">
            <div class="location-item">
              <div>Responsável técnico:</div>
              <p>Dr. Jõao Pereira Lima CRM : 123.323.123-22</p>
              <h3>Upo Oftalmologia</h3>
              <p>Moema - SP</p>
              <p>
                <span>Dando acesso à saúde desde 1996</span>
              </p>
              <div class="social-fixed">
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                />
              </div>
            </div>
            <div class="location-item-collapse">
              <details class="collapse-border">
                <summary>Informações</summary>
                <p>
                  Fundada na década de 1970, a UPO presta serviços em todas as
                  áreas da Oftalmologia. A empresa tem como missão diagnosticar
                  e tratar da forma eficaz e atualizada as patologias oculares,
                  com intuito de reduzir a cegueira na nossa sociedade. A UPO
                  conta com um centro de diagnóstico avançado e personalizado e
                  com profissionais experientes e treinados nos melhores
                  institutos nacionais e internacionais, com especialização no
                  tratamento e cirurgia de Catarata, Vitrectomia, Glaucoma,
                  Miopia, Estrabismo, Hipermetropia, Astigmatismo, Tumores
                  Oculares/ Pálpebras, Plástica Ocular.
                </p>
              </details>
              <details>
                <summary>Local</summary>
                <div>
                  <p>Av. Indianópolis, 489 Indianópolis, São Paulo - SP</p>
                  <div class="address">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 172 172"
                      style="fill: #000000"
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style="mix-blend-mode: normal"
                      >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ff008c">
                          <path
                            d="M86,3.44c-30.40906,0 -55.04,24.63094 -55.04,55.04c0,25.14156 13.27625,52.16438 26.3375,73.1c13.06125,20.93563 26.1225,35.7975 26.1225,35.7975c0.65844,0.73906 1.59906,1.16906 2.58,1.16906c0.98094,0 1.92156,-0.43 2.58,-1.16906c0,0 13.07469,-15.17094 26.1225,-36.2275c13.04781,-21.05656 26.3375,-48.01219 26.3375,-72.67c0,-30.40906 -24.63094,-55.04 -55.04,-55.04zM86,10.32c26.70031,0 48.16,21.45969 48.16,48.16c0,22.13156 -12.51031,48.44219 -25.2625,69.015c-10.68281,17.24031 -19.72625,28.33969 -22.8975,32.1425c-3.19812,-3.77594 -12.24156,-14.63344 -22.8975,-31.7125c-12.73875,-20.425 -25.2625,-46.77594 -25.2625,-69.445c0,-26.70031 21.45969,-48.16 48.16,-48.16zM86,37.84c-13.26281,0 -24.08,10.81719 -24.08,24.08c0,13.26281 10.81719,24.08 24.08,24.08c13.26281,0 24.08,-10.81719 24.08,-24.08c0,-13.26281 -10.81719,-24.08 -24.08,-24.08zM86,44.72c9.54063,0 17.2,7.65938 17.2,17.2c0,9.54063 -7.65937,17.2 -17.2,17.2c-9.54062,0 -17.2,-7.65937 -17.2,-17.2c0,-9.54062 7.65938,-17.2 17.2,-17.2z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <a
                      href="https://goo.gl/maps/KtHzjmtpkfVDaBgg7"
                      target="_blank"
                      >Ver no google maps</a
                    >
                  </div>
                </div>
                <div>
                  <iframe
                    data-aos="fade-up"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0411981297566!2d-46.65716468576102!3d-23.602855384662238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a19e0462ddd%3A0xaa5fc02c978b0f78!2sAv.%20Indian%C3%B3polis%2C%20489%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004063-000%2C%20Brasil!5e0!3m2!1spt-PT!2sao!4v1636839512004!5m2!1spt-PT!2sao"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--close Showcase-->
    <!--Services-->

    <section class="service-area">
      <div class="container">
        <div class="services-title">
          Serviços que [UOP Oftalmologia] realiza atráves da Vidia
        </div>
        <div class="services-cards">
          <div class="card-item" data-aos="fade-left">
            <img src="./assets/img/eye-1-2x.png" alt="" />
            <h3>Cirugia Refrativa</h3>
            <a href="#" class="service-detail"
              >Mais detalhes<i class="fas fa-chevron-right"></i
            ></a>
            <div class="service-content">
              <div class="service-price">
                R$<strong> 6000</strong>6x sem juros
              </div>
              <p>ou 12x de R$ 520,00 no cartão de crédito (4,07%)</p>
              <a href="#" class="service-btn">Quero fazer</a>
            </div>
          </div>
          <div class="card-item" data-aos="fade-right">
            <img src="./assets/img/eye-2-2x.png" alt="" />
            <h3>Catarata</h3>
            <a href="#" class="service-detail"
              >Mais detalhes <i class="fas fa-chevron-right"></i
            ></a>
            <div class="service-content">
              <div class="service-price">
                R$<strong> 6000 </strong>6x sem juros
              </div>
              <p>ou 12x de R$ 520,00 no cartão de crédito (4,07%)</p>
              <a href="#" class="service-btn">Quero fazer</a>
            </div>
          </div>
          <div class="card-item" data-aos="fade-left">
            <img src="./assets/img/eye-1-2x.png" alt="" />
            <h3>Cirugia Refrativa</h3>
            <a href="#" class="service-detail"
              >Mais detalhes <i class="fas fa-chevron-right"></i
            ></a>
            <div class="service-content">
              <div class="service-price">
                R$<strong> 6000 </strong>6x sem juros
              </div>
              <p>ou 12x de R$ 520,00 no cartão de crédito (4,07%)</p>
              <a href="#" class="service-btn">Quero fazer</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--close-->
    <!--Banner--->

    <section>
      <div class="banner-container">
        <div class="container" data-aos="fade-up">
          <h3>Ficou alguma dúvida?</h3>
          <div class="banner-center">
            <div class="talk-btn">Fale com a gente</div>
          </div>
        </div>
      </div>
    </section>
    <!--end banner --->

    <!--- links -->

    <section class="links">
      <div class="container">
        <div class="links-container">
          <div class="link-item">
            <div class="footer-logo">
              <img src="./assets/img/logo.png" alt="Logo" />
              <h3>Cirugias acessíveis a um click</h3>
            </div>
            <div class="social">
              <section class="follow">
                <a href="https://facebook.com">
                  <img src="./assets/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://instagram.com">
                  <img src="./assets/img/instagram.png" alt="Instagram" />
                </a>
                <a href="https://linkedin.com">
                  <img src="./assets/img/linkedin.png" alt="Linkedin" />
                </a>
              </section>
            </div>
          </div>
          <div class="link-menu">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Cirugia</a></li>
              <li><a href="#">Sobre nós</a></li>
            </ul>
            <ul>
              <li><a href="#">Notícias</a></li>
              <li><a href="#">Dúvidas</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div class="link-address">
            <h3>Endereço Comercial:</h3>
            <p>
              Avenida Brigadeiro Faria Lima, 2012, 2º andar - São Paulo - SP
            </p>
          </div>
          <div class="link-item">
            <h3>Fique tranquilo, este site é Seguro:</h3>
            <img src="./assets/img/site.png" alt="Seguro" />
          </div>
        </div>
      </div>
      <div class="b-example-divider"></div>
    </section>

    <!--- end links -->
    <!-- footer  ----->
    <section>
      <!-- Footer -->
      <div class="footer-area">
        <div class="container">
          <div class="footer-inner">
            <div class="footer-left">
              <p>
                © 2020 VIDIA TECNOLOGIA LTDA. Todos os direitos reservados.
                CNPJ: 35.472.162/0001-07
              </p>
            </div>
            <div class="footer-right">
              <a href="#">Termos de uso</a>
              <a href="#">Política de privacidade</a>
              <button id="scrollToTopBtn" @click="scrollToTopBtn">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--- end footer ---->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isToogle: false,
      isVisible: false,
      scrollHeight: 0,
      interval: null,
    };
  },
  watch: {
    scrollHeight() {
      if (this.scrollTo == "2000") {
        console.log("worked");
      }
    },
  },
  methods: {
    toogle() {
      this.isToogle = !this.isToogle;
      console.log(this.isToogle);
    },
    scrollToTopBtn: function () {
      // var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
      var rootElement = document.documentElement;

      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
