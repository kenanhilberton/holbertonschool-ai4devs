"""
FIX: Changed the default argument from a mutable list [] to None.
In Python, default arguments are evaluated only once at definition time.
"""
def add_item_to_cart(item_name, quantity=1, history=None):
    # If history is None, create a new list for THIS specific call
    if history is None:
        history = []
        
    entry = f"{item_name} (x{quantity})"
    history.append(entry)
    print(f"Log Updated: {history}")
    return history

# Test to verify independent sessions
user_a = add_item_to_cart("Laptop", 1)
user_b = add_item_to_cart("Mouse", 2)