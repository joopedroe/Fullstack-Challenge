<!-- eslint-disable vue/require-v-for-key -->
<template>
	<v-app class="container-app">
		<v-content class="background">
			<Header @getArticles="getArticles" />
			<div v-for="(article, index) in items">
				<card :is="(index%2) ? 'CardLeft' : 'CardRight' " :key="index" class="mt-5" :article="article" />
			</div>
			<div class="mb-5 mt-5 viewMore">
				<v-btn
					class="center"
					color="secondary"
					elevation="2"
					rounded
					@click="viewMore">
					View more
				</v-btn>
			</div>
		</v-content>
	</v-app>
</template>

<script>
import Header from '@Components/header.vue';
import CardLeft from '@Components/cardLeft.vue';
import CardRight from '@Components/cardRight.vue';
import articlesPresenter from '@Presenter/article-presenter';

export default {
  name: 'Container',
  components: {
    Header, CardLeft, CardRight
  },
  data: () => ({
    items: [],
    page: 1,
    page_current: 1,
    string_query: '',
    order_query: '',
    search_query: ''
  }),
  created() {
    this.indexArticles('');
  },
  methods: {
    indexArticles(string_query) {
      console.log(string_query);
      articlesPresenter.index(string_query).then(
        response => {
          this.page = 1;
          console.log(response);
          this.page_current = response.data.page;
          this.items = response.data.docs;
        }
      );
    },
    paginationArticles(string_query) {
      console.log(string_query);
      articlesPresenter.index(string_query).then(
        response => {
          this.page_current = response.data.page;
          this.items.push(...response.data.docs);
        }
      );
    },
    getArticles(query) {
      if (query.select)
        this.order_query = `&order=${query.select === 'Recent' ? '-1' : '1'}`;
      if (query.search)
        this.search_query = `&search=${query.search}`;

      this.indexArticles(this.generateQuery());
    },
    generateQuery() {
      const query = `?page=${this.page}${this.order_query}${this.search_query}`;
      return query;
    },
    viewMore() {
      this.page += 1;
      this.paginationArticles(this.generateQuery());
    }
  }
};
</script>

<style scoped lang='scss'>
@import "@Assets/css/settings.scss";
.background{
    background-color: rgb(242, 242, 242);
}
.container-app {
  padding: 0;
  color: $font-color;
}
.viewMore{
  text-align: center;
  flex:1;
}
footer {
  padding: 10px;
  text-align: center;

  img {
    width: 15%;
    opacity: .8;
  }

  p {
    margin: 0;
    opacity: .8;
  }
}
</style>
