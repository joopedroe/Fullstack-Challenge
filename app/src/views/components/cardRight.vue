<template>
	<v-card
		class="mx-auto"
		max-width="744"
		outlined>
		<v-list-item three-line>
			<v-list-item-avatar
				class="image"
				tile
				size="200"
				color="grey">
				<img
					alt="user"
					:src="article.imageUrl">
			</v-list-item-avatar>
			<v-list-item-content>
				<div>
					<h3 class="title_card">
						{{ article.title }}
					</h3>
				</div>
				<div>
					<v-row class="date_button ml-1 mr-1">
						<h5>{{ $functions.formatDate(article.publishedAt) }}</h5>
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
    article: {
      type: Object,
      required: true
    }
  },
  data: () => ({
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
