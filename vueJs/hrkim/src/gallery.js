import Vue from 'vue';
import axios from 'axios';
import Gallery from './components/Gallery.vue';

Vue.prototype.$http = axios
// 전역 컴포넌트 Vue.component(tagName, options)
// Vue.component('movie-gallery', {
//     //template: '',
//     data: function() {
//         return {
//             title: 'Movie',
//             imgs: [
//                 {id: 1, title: '캡틴마블', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jWd9tWuoDPN561r7vp4ekngEe7f.jpg'},
//                 {id: 2, title: '파이트클럽', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kabpExFv9JLp778w9ZtCtZnWH9N.jpg'},
//                 {id: 3, title: '봄날은 간다', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/oEN19w8TEfPkPvjSlm8DYrVUyVQ.jpg'},
//                 {id: 4, title: '프라이멀 피어', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJf2TzE8nRTFbFMPJNW6c8mI0KU.jpg'},
//                 {id: 5, title: '그린치', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/clJYtRBUhDtvKhPk2HNfXouviKF.jpg'},
//                 {id: 6, title: '버드박스', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dB7jNL5I3hb7b1zsGD5OEoSl2BQ.jpg'}
//             ]
//         }
//     }
// })

// 새로운 Vue 정의
new Vue({
    el: '#gallery', // 어떤 element에 적용할지
    render: h => h(Gallery)
    // data() { // 해당 Vue에서 사용할 데이터 정보
    //     return {
    //         title: 'Movie',
    //         imgs: [
    //             {id: 1, title: '캡틴마블', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jWd9tWuoDPN561r7vp4ekngEe7f.jpg'},
    //             {id: 2, title: '파이트클럽', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kabpExFv9JLp778w9ZtCtZnWH9N.jpg'},
    //             {id: 3, title: '봄날은 간다', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/oEN19w8TEfPkPvjSlm8DYrVUyVQ.jpg'},
    //             {id: 4, title: '프라이멀 피어', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJf2TzE8nRTFbFMPJNW6c8mI0KU.jpg'},
    //             {id: 5, title: '그린치', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/clJYtRBUhDtvKhPk2HNfXouviKF.jpg'},
    //             {id: 6, title: '버드박스', src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dB7jNL5I3hb7b1zsGD5OEoSl2BQ.jpg'}
    //         ]
    //     }
    // }
});