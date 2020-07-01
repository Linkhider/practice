<template>
  <ul class="sidebar main-sidebar" >
    <li class="logo-txt">
      Logotype
    </li>

    <span class="menu-text material-icons">
      <i class="material-icons">home</i>
      Home
    </span>
    <span class="menu-text1 material-icons">
      <i class="material-icons">person_outline</i>
      My profile
    </span>
    <span class="menu-text2 material-icons">
      <i class="material-icons">search</i>
      Search
    </span>
    <span class="menu-text3 material-icons">
      <i class="material-icons">thumb_up</i>
      Like/Dislike
    </span>
<span class="support">
Site Help & Support | Terms | Privacy 18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement
</span>
  </ul>
</template>


<script>
    export default {
        props: ['value'],
        data: () => ({
            links: [
                {title: 'Home', url: '/', exact: true},
                {title: 'My profile', url: '/history'},
                {title: 'Search', url: '/planning'},
                {title: 'Like/Dislike', url: '/record'},
                {title: 'Chats', url: '/categories'},
                {title: 'Matches', url: '/history'},
                {title: 'Visitors', url: '/planning'},
                {title: 'Favorites', url: '/record'},
                {title: 'Settings', url: '/categories'}
            ]
        })
    }

</script>



