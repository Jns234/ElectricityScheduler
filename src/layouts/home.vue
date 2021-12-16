<template>
<main class="px-24 py-10 w-screen h-screen text-black bg-white dark:(text-white bg-black) flex flex-col">
  <Header class="mt-0 mb-auto"/>
  <div class="main">
    <router-view />

    <!--<div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Development purposes only - Home Layout - Bruxemburg]
    </div>-->
  </div>
  <Footer class="mb-0 mt-auto" />
</main>
</template>
