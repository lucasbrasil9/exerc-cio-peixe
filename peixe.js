var config = {
    type: Phaser.AUTO,
    width:800,
    height:600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar','assets/bg_azul-escuro.png');

    //carregar o logo
    this.load.image('logo','assets/logo-inteli_branco.png');

    //carregar o peixe
    this.load.image('peixe','assets/peixes/peixe_turquesa.png');

    //carregar fundo do peixe
    this.load.image('fundo_peixe','assets/fundo peixe 2.png')
}

function create() {
    this.add.image(400,300,'mar');

    //adicionar o logo na tela
    this.add.image(400,50,'logo').setScale(0.5);

    //adicionar fundo peixe
    this.add.image(400,400,'fundo_peixe').setScale(0.4);

    //guardar o peixe em uma variavel
    peixinho = this.add.image(400,300,'peixe');

    //transformando a variavel
    peixinho.setFlip(true,false)  
}

function update() {
    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}  


