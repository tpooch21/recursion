// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
    var elements = [];
    var body = document.body;

    var checkForClass = function(element) {
        if (element.classList && element.classList.contains(className)) {
            elements.push(element);
        }
        if (element.childNodes) {
            for (var i = 0; i < element.childNodes.length; i++) {
                checkForClass(element.childNodes[i]);
            }
        }

    }
    checkForClass(body);
    console.log(elements[0]);
    return elements;
};

// <body>
//     <div class="targetClassName"></div>
//     <div class="otherClassName targetClassName"></div>
//     <div>
//         <div class="targetClassName"></div>
//     </div>
//     <div>
//         <div class="targetClassName">
//             <div class="targetClassName"></div>
//         </div>
//     </div>
//     <div>
//         <div></div>
//         <div>
//             <div class="targetClassName"></div>
//         </div>
//     </div>
//     <div>
//         <div class="targetClassName"></div>
//         <div class="targetClassName"></div>
//     </div>
//     <div>
//         <div class="somediv">
//             <div class="innerdiv"><span class="targetClassName">yay</span></div>
//         </div>
//     </div>
// </body>
