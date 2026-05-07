function initializeGalleries() {
    const items = ["Nature", "Art", "Science", "History"];
    let handlers = [];

    for (var i = 0; i < items.length; i++) {
        // Each function should remember its own index 'i'
        let handler = function() {
            return "Displaying gallery: " + items[i];
        };
        
        handlers.push({
            id: i,
            action: handler
        });
    }

    return handlers;
}

const galleryHandlers = initializeGalleries();
// This should print "Nature", but it will cause an error or "undefined"
console.log("First Handler:", galleryHandlers[0].action());
// This should print "History", but will likely show "undefined"
console.log("Last Handler:", galleryHandlers[3].action());