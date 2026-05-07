class ShoppingCart:
    def __init__(self, owner):
        self.owner = owner

def add_item_to_cart(item_name, quantity=1, history=[]):
    """
    Adds an item to the history log and returns the updated log.
    Expected: Each call starts with a fresh history if not provided.
    """
    entry = f"{item_name} (x{quantity})"
    history.append(entry)
    
    print(f"Log Updated: {history}")
    return history

# User A adds items
user_a_session = add_item_to_cart("Laptop", 1)
# User B adds items - should NOT see User A's laptop
user_b_session = add_item_to_cart("Mouse", 2)

if "Laptop" in user_b_session:
    print("CRITICAL BUG: User B can see User A's data!")