<template>
<div class="stack-item-container">
    <div
    class="stack-progress-bar"
    :style="`width:${item.percent}%`"
    >
        <div class="stack-item-name">
            <div class="stack-item-text">{{ item.name }}</div>
        </div>
    </div>
    <div class="stack-item-percent">
        <div class="stack-item-text">{{ item.percent }}%</div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style>
.stack-item-text {
    margin: auto;
}
.stack-item-container {
    background-color: rgb(230, 230, 230);
    height: 40px;
    margin: 3px;
}
.stack-item-container:hover {
    background-color: rgb(84, 158, 255);
    color: white;
}
.stack-progress-bar {
    color: white;
    background-color: rgb(0, 110, 255);
    height: 40px;
    float: left;
}
.stack-progress-bar:hover {
    background-color: rgb(58, 143, 255);
}
.stack-item-name {
    display: flex;
    background-color:  rgb(84, 158, 255);
    height: 40px;
    width: 120px;
}
.stack-item-percent {
    display: flex;
    height: 40px;
}
</style>