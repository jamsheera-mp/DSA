
// JS program to reverse individual words in a given
// string using STL list


// reverses individual words of a string
function reverseWords(str) {
    let st = [];

    // Traverse given string and push all characters
    // to stack until we see a space.
    for (let i = 0; i < str.length; ++i) {
        if (str[i] != ' ')
            st.unshift(str[i]);

        // When we see a space, we print contents
        // of stack.
        else {
            while (st.length != 0) {
                process.stdout.write(st[0]);
                st.shift();
            }
            //Add space after word is reversed.
            process.stdout.write(' ');
        }
    }

    // Since there may not be space after
    // last word.
    while (st.length != 0) {
        process.stdout.write(st[0]);
        st.shift();
    }
}

// Driver program to test function
let str = "Geeks for Geeks";
reverseWords(str);

