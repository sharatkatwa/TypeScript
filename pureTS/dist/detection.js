"use strict";
function AdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return account.normalUser;
}
