{
	"vue-Ts": {
    "prefix": "vueTs",
    "body": [
      "<template>\n\t<div>\n\n\t</div>\n</template>\n",

      "<script lang=\"ts\">\nimport { Component, Vue } from 'vue-property-decorator';\n\n@Component({components:{}})\nexport default class ${1:ClassName} extends Vue{\n$0\n}\n</script>\n\n",

      "<style lang=\"stylus\" scope>\n\n</style>"

    ],

    "description": "自定义vue+typescript模板"

	},
	"vue-Template": {
		"prefix": "vueTemplate",
		"body": [
				"<!-- $1 -->",
				"<template>",
				"  <div class='$2'>$5</div>",
				"</template>",
				"",
				"<script>",
				"export default {",
				"  components: {},",
				"  data() {",
				"    return {",
				"    };",
				"  },",
				"  computed: {},",
				"  watch: {},",
				"  methods: {",
				"  },",
				"  created() {",
				"  },",
				"  mounted() {",
				"  },",
				"  beforeCreate() {}, //生命周期 - 创建之前",
				"  beforeMount() {}, //生命周期 - 挂载之前",
				"  beforeUpdate() {}, //生命周期 - 更新之前",
				"  updated() {}, //生命周期 - 更新之后",
				"  beforeDestroy() {}, //生命周期 - 销毁之前",
				"  destroyed() {}, //生命周期 - 销毁完成",
				"  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发",
				"  }",
				"</script>",
				"$4",
				"<style lang='less' scoped>",
				"</style>"
		],
		"description": "Log output to console"
}
}