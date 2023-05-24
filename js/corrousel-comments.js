const { createApp } = Vue;

createApp({
    data() {
        return {
            comentarios: [{
                message: ' Buenos precios, ropa de excelente calidad.', 
                active: true
            }, {
                message: 'La dueña una genia. Muy atenta con la atención. Gracias Ruma'
            }, {
                message: ' Me encantó la calidad de la ropa. Los precios super accesibles.'
            }, {
                message: ' Un lujo todo. Atención, precios, la dueña muy atenta, la calidad de la ropa. Voy a volver pronto Ruma'
            }]
        }
    }, 

    methods: {
        changeCarrousel: function() {
            const actual = this.comentarios.find(comentario => comentario.active);
            const index = this.comentarios.indexOf(actual);
            const next = (index < this.comentarios.length -1) ? index + 1 : 0;

            this.comentarios[index].active = false;
            this.comentarios[next].active = true;
        }
    },

    async mounted() { 
        for (var i = 0; i < this.comentarios.length; i++) {
            let response = await fetch('https://randomuser.me/api/');
            response = await response.json();

            this.comentarios[i] = {
                name: response.results[0].name, 
                email: response.results[0].email, 
                picture: response.results[0].picture, 
                message: this.comentarios[i].message, 
                active: (this.comentarios[i].active) ? this.comentarios[i].active : false
            };
        }

        setInterval(() => {
            this.changeCarrousel();
        }, 10000);
    }
}).mount('#app')