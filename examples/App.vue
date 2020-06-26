<template>
    <div>
        <button @click="changeBigger">bigger</button>
        <button @click="changeSmall">small</button>
        <div id="app" >
            <div class="box1" v-resize="resizeHandler">监视器</div>
            <div class="box2" :style="{height: `${height}px`}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        resizeHandler(val) {
            console.log(val);
        },
        changeBigger() {
          this.height +=10
        },
        changeSmall() {
          this.height -=10
        }
    },
    data() {
        return {
            height: 100
        };
    }
};
</script>

<style>
#app {
    width: 100%;
    height: 600px;
    border: 1px solid black;
    color: white;
    display: flex;
    flex-direction: column;
}
.box1 {
    background: green;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box2 {
    background: blue;
}
</style>
