function responseObject(_code,_message,_data,_itemCount,_fItemCount) {
    return   {
        code: _code,
        message: _message,
        data: _data,
        totalItemCount: _itemCount,
        filteredItemCount: _fItemCount
    };
}
module.exports = responseObject;

