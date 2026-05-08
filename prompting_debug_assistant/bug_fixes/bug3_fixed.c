#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * FIX: Allocated memory on the HEAP using malloc.
 * Local stack arrays are destroyed when the function returns,
 * leading to dangling pointers.
 */
char* format_user_message(const char* username) {
    char* buffer = malloc(100 * sizeof(char)); 
    
    if (buffer == NULL) return NULL; // Memory allocation check

    if (username == NULL) {
        strcpy(buffer, "Guest");
        return buffer;
    }
    
    sprintf(buffer, "Welcome back, %s! You have 5 new messages.", username);
    return buffer;
}

int main() {
    char* msg = format_user_message("Admin");
    if (msg != NULL) {
        printf("Notification: %s\n", msg);
        free(msg); // FIX: Always free heap memory
    }
    return 0;
}