
<template>
	<v-parallax
		height="400"
		dark
		src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
		<div>
			<div class="mt-3 row">
				<v-spacer />
				<div class="row">
					<v-text-field
						v-model="search"
						class="mr-2 mt-6 bar_navigation"
						label="Search"
						dense
						solo />

					<v-btn elevation="4"

						class="mr-8 mt-6" @click="searchArticle">
						<v-icon>fas fa-search</v-icon>
					</v-btn>
				</div>
				<v-row>
					<v-menu
						left
						bottom>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								elevation="4"

								class=" ml-9"
								v-bind="attrs"
								v-on="on">
								{{ order }}
								<v-icon class="ml-1">
									fas fa-sort
								</v-icon>
							</v-btn>
						</template>

						<v-list>
							<v-list-item
								v-for="n in ['Recent','Older']"
								:key="n"
								@click="() => {selectOrder(n)}">
								<v-list-item-title>{{ n }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-row>
			</div>
		</div>
		<v-row
			align="center"
			justify="center">
			<v-col
				class="text-center"
				cols="12">
				<v-avatar size="156" elevation="23">
					<img
						alt="user"
						src="https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/static/home/img/launcher.png">
				</v-avatar>
				<h1 class=" mb-4 mt-4">
					Space Flight News
				</h1>
				<div class="divhr">
					<hr class="divider">
				</div>
			</v-col>
		</v-row>
	</v-parallax>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    order: 'Sort',
    search: '',
    query: {}
  }),
  methods: {
    selectOrder(select) {
      this.order = select;
      this.query.select = select;
      this.$emit('getArticles', this.query);
    },
    searchArticle() {
      console.log(this.search);
      this.query.search = this.search;
      this.$emit('getArticles', this.query);
    }
  }

};
</script>

<style lang="scss" scoped>
.divider{
  width:100%;
  border-color: rgb(47, 45, 82);
  border-top: 2px solid rgba(47, 45, 82, 0.9);
}
.divhr{
  padding-right: 300px;
  padding-left: 300px;
}
.button_header{
  color: #302e53;
}
.bar_navigation{
  opacity: 0.9;
}
.conteudo-horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.select{
	padding-top: 0;
	width: 150px;
	height: 40px;
	padding-right: 20px;
}
.heading {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
