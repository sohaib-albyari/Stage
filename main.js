var width = window.innerWidth;
var height = window.innerHeight;
var conformation = document.querySelector(".overlay");
var remove = document.querySelector("#remove");
var cancel = document.querySelector("#cancel");
var items = document.querySelector("#clip");
var stage = new Konva.Stage({
    container: "container",
    width: width,
    height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

var stageObj = new Image();
stageObj.onload = function() {
    var stages = new Konva.Image({
        x: 0,
        y: 0,
        image: stageObj,
        width: stage.width(),
        height: stage.height(),
    });

    // add the shape to the layer
    layer.add(stages);
};
stageObj.src = "stage.png";

items.onchange = (e) => {
    var imageObj = new Image();
    imageObj.onload = function() {
        var item = new Konva.Image({
            x: 100,
            y: 100,
            image: imageObj,
            draggable: true,
        });

        // add the shape to the layer
        layer.add(item);

        // change zindex
        item.on("dragstart", function() {
            this.moveToTop();
            layer.draw();
        });

        // delete item
        item.on("dblclick dbltap", function(e) {
            conformation.style.display = "block";
            remove.addEventListener("click", function() {
                item.destroy();
                conformation.style.display = "none";
                // item.off("dblclick dbltap");

            });
            cancel.addEventListener("click", function() {
                // item.removeEventListener();
                // item.off("dblclick dbltap");

                conformation.style.display = "none";
            });
            console.log(e.type);
            layer.draw();
        });


    };
    imageObj.src = e.target.value;
    e.target.value = "";
};

// alternative API:
//   Konva.Image.fromURL(
//     'https://konvajs.org//assets/darth-vader.jpg',
//     function (darthNode) {
//       darthNode.setAttrs({
//         x: 200,
//         y: 50,
//         scaleX: 0.5,
//         scaleY: 0.5,
//       });
//       layer.add(darthNode);
//     }
//   );

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

document.getElementById("save").addEventListener(
    "click",
    function() {
        var dataURL = stage.toDataURL({
            pixelRatio: 3
        });
        downloadURI(dataURL, "stage.png");
    },
    false
);var width = window.innerWidth;
var height = window.innerHeight;
var conformation = document.querySelector(".overlay");
var remove = document.querySelector("#remove");
var cancel = document.querySelector("#cancel");
var items = document.querySelector("#clip");
var stage = new Konva.Stage({
    container: "container",
    width: width,
    height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

var stageObj = new Image();
stageObj.onload = function() {
    var stages = new Konva.Image({
        x: 0,
        y: 0,
        image: stageObj,
        width: stage.width(),
        height: stage.height(),
    });

    // add the shape to the layer
    layer.add(stages);
};
stageObj.src = "stage.png";

items.onchange = (e) => {
    var imageObj = new Image();
    imageObj.onload = function() {
        var item = new Konva.Image({
            x: 100,
            y: 100,
            image: imageObj,
            draggable: true,
        });

        // add the shape to the layer
        layer.add(item);

        // change zindex
        item.on("dragstart", function() {
            this.moveToTop();
            layer.draw();
        });

        // delete item
        item.on("dblclick dbltap", function(e) {
            conformation.style.display = "block";
            remove.addEventListener("click", function() {
                item.destroy();
                conformation.style.display = "none";
                // item.off("dblclick dbltap");

            });
            cancel.addEventListener("click", function() {
                // item.removeEventListener();
                // item.off("dblclick dbltap");

                conformation.style.display = "none";
            });
            console.log(e.type);
            layer.draw();
        });


    };
    imageObj.src = e.target.value;
    e.target.value = "";
};

// alternative API:
//   Konva.Image.fromURL(
//     'https://konvajs.org//assets/darth-vader.jpg',
//     function (darthNode) {
//       darthNode.setAttrs({
//         x: 200,
//         y: 50,
//         scaleX: 0.5,
//         scaleY: 0.5,
//       });
//       layer.add(darthNode);
//     }
//   );

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

document.getElementById("save").addEventListener(
    "click",
    function() {
        var dataURL = stage.toDataURL({
            pixelRatio: 3
        });
        downloadURI(dataURL, "stage.png");
    },
    false
);
