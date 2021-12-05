<template>
  <div>
    <h2 class="is-size-3 m-3">Hello, world.</h2>

    <div class="columns">
      <div class="column is-one-third">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image">
                  <img src="@/assets/photo.jpeg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Евченко Максим</p>
                <p class="subtitle is-6"><i class="icofont-telegram mr-1"></i>max_magixe</p>
              </div>
            </div>
            <div class="content">
                Я Front-End Developer и серьезно отношусь к пользовательскому интерфейсу, и созданию интуитивно понятного дизайна интерфейсов.
              <blockquote class="mt-5">Минимум усилий от пользователя для достижения требуемого результата это цель каждого интерфейса.</blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <h5 class="is-size-5 m-2">Мои навыки это...</h5>
              <p>Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью как из PSD-макета, так и без него. Разработка сложной backend логики для уже готового frontend'а, либо по подробному техническому заданию с обеспечением максимальной эффективности и производительности.</p>
              <p>Создание полноценных сайтов и веб-приложений, включающих себя пользовательский интерфейс, сложную бизнес логику и высокопроизводительные серверные скрипты.</p>
              <p>Оптимизация структуры сайта для лучшей его обработки поисковыми системами, что впоследствии улучшает его позиции в поисковой выдаче, ускоряя развитие и увеличивая посещаемость.</p>
            </div>
          </div>
        </div>
      </div>
    </div>      
    <div class="columns">
      <transition-group
        appear
        name="icon-fade"
        
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div class="column" v-for="(item, index) in icons_info" :key="item.id" :data-index="index">
          <div class="cell-home">
            <i :class="`icofont-${item.icon} home-icons`"></i>
            </div>
          <div class="cell-left-home has-text-centered">
            <h3 class="mb-3 mt-5">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  setup() {
    let icons_info = [
      {
        id: 1,
        title: 'Быстро',
        text: 'Быстрая загрузка и взаимодействие без задержек — это первичная задача для меня.',
        icon: 'speed-meter'
      },
      {
        id: 2,
        title: 'Отзывчиво',
        text: 'Все должно работать на любом устройстве, большом или маленьком.',
        icon: 'smart-phone'
      },
      {
        id: 3,
        title: 'Интуитивно',
        text: 'UX/UI должен быть понятным и простым в использовании для пользователей любого уровня',
        icon: 'bulb-alt'
      },
      {
        id: 4,
        title: 'Динамично',
        text: 'Важный аспект любого сайта это динамическое содержимое, статичные сайты это вчерашний день.',
        icon: 'rocket-alt-2'
      }
    ];

    const beforeEnter = (el) => {
      el.style.opacity = 0;
    }
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        duration: 2,
        delay: el.dataset.index * 0.25,
        onConplete: done
      });
    }
    const leave = (el, done) => {
      gsap.to(el, {
        opacity: 0,
        delay: el.dataset.index * 0.15,
        onConplete: done
      });
    }
    return { beforeEnter, enter, leave, icons_info };
  }

}
</script>

<style>
.home-icons {
  font-size: 64px;
}
.cell-home {
  width: 120px;
  display: flex;
  background: linear-gradient(135deg, rgb(84, 158, 255), rgb(0, 110, 255));
  color: white;
  height: 120px;
  margin: auto;
  -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%); 
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}
.card {
  box-shadow: none;
}
.cell-home > i {
  margin: auto;
  
}
.cell-left-home > p, h3 {
  margin: 0px !important;
}
.cell-left-home > h3 {
  font-size: 27px;
}
</style>