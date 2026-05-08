/**
 * Düzəliş: 'var' əvəzinə 'let' istifadə olundu.
 * Bu, hər bir iterasiya üçün yeni bir blok səviyyəli əhatə dairəsi yaradır
 * və closure-ların düzgün 'i' qiymətini götürməsini təmin edir.
 */
function initializeGalleries() {
    const items = ["Nature", "Art", "Science", "History"];
    let handlers = [];

    for (let i = 0; i < items.length; i++) {
        let handler = function() {
            return "Displaying gallery: " + items[i];
        };
        handlers.push({ id: i, action: handler });
    }

    return handlers;
}

// Test/Doğrulama
const galleryHandlers = initializeGalleries();

// Gözlənilən: "Displaying gallery: Nature"
console.log("Handler 0:", galleryHandlers[0].action()); 

// Gözlənilən: "Displaying gallery: History"
console.log("Handler 3:", galleryHandlers[3].action());