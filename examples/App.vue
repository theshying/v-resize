<template>
    <div>
        <button @click="changeBigger">bigger</button>
        <button @click="changeSmall">small</button>
        <div id="app" >
            <div class="box1" v-resize="resizeHandler">
            <p>监视器</p> 
              <div v-if="resizeSize">
                   <p> width：{{resizeSize.width+'px'}}</p>
                    <p>height: {{resizeSize.height+'px'}}</p>
              </div>
            </div>
            <div class="box2" :style="{height: `${height}px`}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        resizeHandler(val) {
            this.resizeSize = val
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
            height: 100,
            resizeSize: null
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box2 {
    background: blue;
}
</style>
