<script setup>
import { onMounted } from "vue";

const images = Array.from(
  { length: 5 },
  (_, i) => `https://picsum.photos/800/400?random=${i + 1}`
);

onMounted(async () => {
  const { default: Swiper } = await import("swiper/bundle");
  await import("swiper/css/bundle");

  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: { delay: 5000 },
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 20 },
      480: { slidesPerView: 3, spaceBetween: 30 },
      640: { slidesPerView: 4, spaceBetween: 40 },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div>
    <section id="gallery">
      <div class="container">
        <div class="row">
          <div class="col wrapper">
            <h2 class="section-title">Gallery</h2>
            <p class="section-subtitle">A collection of beautiful images</p>
            <div class="swiper">
              <div class="swiper-wrapper">
                <div v-for="(image, n) in images" :key="n" class="swiper-slide">
                  <img :src="image" :alt="`Image ${n + 1}`" />
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#gallery {
  font-family: "Montserrat", sans-serif;
  background-color: beige;
  padding: 80px 0;

  .section-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .section-subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  .wrapper {
    position: relative;

    .swiper-slide {
      img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        display: block;
        object-fit: cover;
      }
    }

    .swiper-pagination {
      position: absolute;
      bottom: -45px;

      :deep(.swiper-pagination-bullet) {
        background: #333;
        opacity: 0.4;
        border-radius: 20px;
        width: 20px;
        height: 8px;
        margin: 0 4px;
        transition: all 0.3s ease;

        &.swiper-pagination-bullet-active {
          opacity: 1;
          width: 40px;
          background: #333;
        }
      }
    }
  }
}
</style>
