def get_last_n_elements(data_list, n):
    """
    Returns the last n elements of a list.
    """
    list_length = len(data_list)
    if n > list_length:
        return data_list
    
    start_index = list_length - n
    # FIX: Removed the '+ 1' to include the element at the starting index.
    # Python slicing [start:stop] is inclusive of the start index.
    result = data_list[start_index:]
    return result

# Validation Test
if __name__ == "__main__":
    sample_list = [10, 20, 30, 40, 50, 60]
    n = 3
    print(f"Input: {sample_list}, n={n}")
    print(f"Output: {get_last_n_elements(sample_list, n)}")