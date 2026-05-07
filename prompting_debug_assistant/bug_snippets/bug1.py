def get_last_n_elements(data_list, n):
    """
    Returns the last n elements from the provided list.
    If n is greater than the list length, returns the whole list.
    """
    list_length = len(data_list)
    
    # Logic to calculate the starting point
    # There is a subtle off-by-one error here
    start_index = list_length - n
    
    # Slicing the list from the calculated start index
    result = data_list[start_index + 1:] 
    
    return result

# Test Case
my_data = [10, 20, 30, 40, 50, 60]
n_to_remove = 3
# Expected: [40, 50, 60]
# Actual: [50, 60]
print(f"Result for n={n_to_remove}:", get_last_n_elements(my_data, n_to_remove))