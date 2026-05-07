#include <stdio.h>
#include <string.h>

char* format_user_message(const char* username) {
    char buffer[100]; // Local stack-allocated array
    
    if (username == NULL) {
        return "Guest";
    }

    sprintf(buffer, "Welcome back, %s! You have 5 new messages.", username);
    
    // BUG: Returning address of local variable which will be
    // deallocated once the function returns.
    return buffer; 
}

int main() {
    char* msg = format_user_message("Admin");
    
    // Undefined behavior: might print garbage or crash
    printf("Notification: %s\n", msg);
    
    return 0;
}