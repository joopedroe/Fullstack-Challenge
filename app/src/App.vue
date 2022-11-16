<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    loading: true,
    loading_allow_html: true
  })


};
</script>

<style lang="scss">
@import "@Assets/css/spacing-responsive.scss";
@import "@Assets/css/settings.scss";

/* Main CSS */
html,
body,
#app {
  height: 100%;
  font-family: 'Roboto Condensed', sans-serif;
}
.v-btn {
  &__content {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-transform: none;
    line-height: 1.4;
  }
}
h1,
h2,
h3 {
  color: $title-color;
}
h1,
h2,
h3,
h4,
h5,
h6,
.v-btn,
.v-card__title,
.v-navigation-drawer,
.v-list__tile__title,
.text--primary,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

</style>
