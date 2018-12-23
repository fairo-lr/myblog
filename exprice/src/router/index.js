import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import coding from '@/components/coding'
import contact from '@/components/contact'
import notes from '@/components/notes'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
	routes: [
		//	{
		//			path: '/',
		//			name: 'HelloWorld',
		//			component: HelloWorld
		//		},

		{
			path: '/coding',
			//name: 'coding',
			component: coding
		},
		{
			path: '/about',
			//name: 'about',
			component: about
		},
		{
			path: '/contact',
			//name: 'contact',
			component: contact
		},
		{
			path: '/post/:filename',
			name: 'post',
			component: page
		},
		{
			path: '/notes',
			//name: 'notes',
			component: notes
		}
	]
})