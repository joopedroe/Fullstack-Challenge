<template>
	<v-card
		class="mx-auto"
		max-width="644">
		<div class="mt-5">
			<h1>
				{{ article.title }}
			</h1>
		</div>
		<h5>{{ $functions.formatDate(article.publishedAt) }}</h5>
		<v-img
			lazy-src="https://picsum.photos/id/11/10/6"
			class="mt-4"
			:src="article.imageUrl" />
		<div>
			<h4 class="summary_card">
				{{ article.summary }}
			</h4>
		</div>
		<v-list-item three-line>
			<v-list-item-avatar
				tile
				size="200"
				color="grey">
				<img
					alt="user">
			</v-list-item-avatar>
			<v-list-item-content>
				<div>
					<v-row class="date_button ml-1 mr-1">
						<v-spacer />
						<v-btn
							small
							color="#2196f3" @click.stop="openArticle(article.url)">
							See article
						</v-btn>
					</v-row>
				</div>
				<div>
					<h4 class="summary_card">
						{{ article.summary }}
					</h4>
				</div>
				<v-card-actions>
					<v-btn
						color="#D07017">
						View more
					</v-btn>
				</v-card-actions>
			</v-list-item-content>
		</v-list-item>
	</v-card>
</template>
<script>
export default {
  name: 'CardRight',
  props: {
    id: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    article: {
      id: 17307,
      title: 'Companies have diverging views on the future of European launch',
      url: 'https://spacenews.com/companies-have-diverging-views-on-the-future-of-european-launch/',
      imageUrl: 'https://spacenews.com/wp-content/uploads/2022/11/Launch-panel-Bremen-STEE-16nov2022-ajones-spacenews-scaled.jpg',
      newsSite: 'SpaceNews',
      summary: 'Arianespace and German launch startups Isar Aerospace and Rocket Factory Augsburg are moving towards first launches next year but have mixed views on how the European launch sector has and should develop.',
      publishedAt: '2022-11-16T14:57:19.000Z',
      updatedAt: '2022-11-16T14:57:19.279Z',
      featured: false,
      launches: [],
      events: []
    }
  }),
  methods: {
    openArticle(url) {
      window.open(url, '_blank');
    }
  }

};
</script>
<style>
.summary_card{
     overflow: hidden; /* remove o estouro do elemento */
     text-overflow: ellipsis; /* adiciona “...” no final */
     display: -webkit-box;
     -webkit-line-clamp: 3; /* quantidade de linhas */
     -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
}

</style>
