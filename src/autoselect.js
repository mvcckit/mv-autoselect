/* 
   #mv-autoselect
   ========================================================================== */

/**
 * The `autoselect` directive selects all text inside a textbox.
 *
 * @name mv-autoselect
 * @type attribute
 */

mvcc.com.create({
    init: function (el) {
        el.select();
    }
}, 'mv-autoselect');