<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import RefCount from './components/RefCount.vue'
import ReactiveComp from './components/ReactiveComp.vue'
import ChangColor from './components/ChangColor.vue'
import ComputedAndMethod from './components/ComputedAndMethod.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import TermsAgreement from './components/TermsAgreement.vue'
import DisableComputed from './components/DisableComputed.vue'
import VbindStyle from './components/VbindStyle.vue'
import VbindClass from './components/VbindClass.vue'
import VifDemo from './components/VifDemo.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import VifVshowDiff from './components/VifVshowDiff.vue'
import ProductList from './components/ProductList.vue'
import ArrayChangeDetection from './components/ArrayChangeDetection.vue'
import ProductManager from './components/ProductManager.vue'
import VonClick from './components/VonClick.vue'
import VonInput from './components/VonInput.vue'
import VonkeyEvent from './components/VonkeyEvent.vue'
import VmodelDemo2 from './components/VmodelDemo2.vue'
import OnMounted from './components/OnMounted.vue'
import OnUnmounted from './components/OnUnmounted.vue'
import onUpdated from './components/OnUpdated.vue'
import RefComponent from './components/RefComponent.vue'
import WatchRef from './components/WatchRef.vue'
import WatchDeepAndMutiValues from './components/WatchDeepAndMutiValues.vue'
import WatchEffectComp from './components/WatchEffectComp.vue'
import TabComponent from './components/TabComponent.vue'
import RegisterRunDown from './components/RegisterRunDown.vue'

const msgT = "I'm Jerry"

import { ref } from 'vue'

const show = ref(false)

function open() {
  show.value = true
}

const btns = [
  { text: '取消', color: 'secondary', onClick: () => onCancel() },
  { text: '確認刪除', color: 'danger', onClick: () => onDelete() },
]

function onCancel() {
  console.log('使用者取消了')
}
function onDelete() {
  console.log('刪除成功')
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="I'm Kevin" /> -->
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <RefCount /> -->
    <!-- <ReactiveComp />
      <ChangColor />
      <ComputedAndMethod />
      <ShoppingCart /> -->
    <!-- <DisableComputed />
      <TermsAgreement />
      <VbindStyle />
      <VbindClass /> -->
    <!-- <ConditionalRendering />
      <ArrayChangeDetection />

      <VifDemo />

      <VifVshowDiff />
      <ProductList /> -->
    <!-- <ProductManager /> -->
    <!-- <VonClick />
      <VonInput /> -->
    <!-- <VonkeyEvent /> -->
    <!-- <VmodelDemo2 />
    <OnMounted />
    <OnUnmounted />
    <onUpdated /> -->
    <!-- <RefComponent /> -->
    <!-- <WatchRef />
    <WatchDeepAndMutiValues /> -->
    <!-- <WatchEffectComp /> -->
    <!-- <TabComponent /> -->
    <!-- <RegisterRunDown /> -->
    <!-- <RegisterRunDown /> -->

    <button @click="open">開啟AlertBox</button>

    <AlertBox
      v-model:visible="show"
      :title="'刪除確認'"
      :message="'確定要刪除這筆資料嗎？'"
      :buttons="btns"
      :size="'large'"
      :autoClose="false"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
