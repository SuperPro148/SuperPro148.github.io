const icon = document.getElementById("icon");

// drawVerticalSegment(0, 15, "red", icon); // top left
// drawVerticalSegment(0, 105, "red", icon); // bottom left
// drawVerticalSegment(90, 15, "red", icon); // top right
// drawVerticalSegment(90, 105, "red", icon); // bottom right
// drawHorizontalSegment(15, 0, "red", icon); // top
// drawHorizontalSegment(15, 90, "red", icon); // middle
// drawHorizontalSegment(15, 180, "red", icon); // bottom

drawVerticalSegment(180, 105, "blue", icon);
drawVerticalSegment(180, 195, "blue", icon);
drawVerticalSegment(270, 105, "blue", icon);
drawVerticalSegment(270, 195, "blue", icon);
drawHorizontalSegment(195, 90, "blue", icon);
drawHorizontalSegment(195, 180, "blue", icon);
drawHorizontalSegment(195, 270, "blue", icon);

drawVerticalSegment(60, 67.5, "lime", icon);
drawVerticalSegment(150, 67.5, "lime", icon);
drawVerticalSegment(150, 157.5, "lime", icon);
drawHorizontalSegment(75, 142.5, "lime", icon);

drawVerticalSegment(30, 30, "red", icon);
drawVerticalSegment(30, 120, "red", icon);

function drawVerticalSegment(x, y, color, svg) {

    const cx = [x + 2, x + 10, x + 18, x + 2, x + 10, x + 18];
    const cy = [y + 10, y + 2, y + 10, y + 70, y + 78, y + 70];

    const x1 = [x + 10, x + 10, x + 2, x + 18, x + 2, x + 18];
    const y1 = [y + 2, y + 2, y + 10, y + 10, y + 70, y + 70];
    const x2 = [x + 2, x + 18, x + 2, x + 18, x + 10, x + 10];
    const y2 = [y + 10, y + 10, y + 70, y + 70, y + 78, y + 78];

    let filling = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    filling.setAttribute("points", cx[0] + ", " + cy[0] + " " + cx[1] + ", " + cy[1] + " " + cx[2] + ", " + cy[2] + " " + cx[5] + ", " + cy[5] + " " + cx[4] + ", " + cy[4] + " " + cx[3] + ", " + cy[3]);
    filling.setAttribute("style", "fill:" + color);
    svg.appendChild(filling);

    for (let i = 0; i < 6; i++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx[i]);
        circle.setAttribute("cy", cy[i]);
        circle.setAttribute("r", "2");
        circle.setAttribute("fill", color);
        svg.appendChild(circle);
    }

    for (let i = 0; i < 6; i++) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1[i]);
        line.setAttribute("y1", y1[i]);
        line.setAttribute("x2", x2[i]);
        line.setAttribute("y2", y2[i]);
        line.setAttribute("style", "stroke:" + color + ";stroke-width:4");
        svg.appendChild(line);
    }
    
}

function drawHorizontalSegment(x, y, color, svg) {

    const cx = [x + 10, x + 2, x + 10, x + 70, x + 78, x + 70];
    const cy = [y + 2, y + 10, y + 18, y + 2, y + 10, y + 18];

    const x1 = [x + 2, x + 2, x + 10, x + 10, x + 70, x + 70];
    const y1 = [y + 10, y + 10, y + 2, y + 18, y + 2, y + 18];
    const x2 = [x + 10, x + 10, x + 70, x + 70, x + 78, x + 78];
    const y2 = [y + 2, y + 18, y + 2, y + 18, y + 10, y + 10];

    let filling = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    filling.setAttribute("points", cx[0] + ", " + cy[0] + " " + cx[1] + ", " + cy[1] + " " + cx[2] + ", " + cy[2] + " " + cx[5] + ", " + cy[5] + " " + cx[4] + ", " + cy[4] + " " + cx[3] + ", " + cy[3]);
    filling.setAttribute("style", "fill:" + color);
    svg.appendChild(filling);

    for (let i = 0; i < 6; i++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx[i]);
        circle.setAttribute("cy", cy[i]);
        circle.setAttribute("r", "2");
        circle.setAttribute("fill", color);
        svg.appendChild(circle);
    }

    for (let i = 0; i < 6; i++) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1[i]);
        line.setAttribute("y1", y1[i]);
        line.setAttribute("x2", x2[i]);
        line.setAttribute("y2", y2[i]);
        line.setAttribute("style", "stroke:" + color + ";stroke-width:4");
        svg.appendChild(line);
    }
    
}