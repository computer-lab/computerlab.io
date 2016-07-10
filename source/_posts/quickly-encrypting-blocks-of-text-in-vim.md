---
layout: post
title: Quickly Encrypting Blocks of Text in Vim
date: 2016-07-10
category: Notes
lede: Here's how to leverage GPG and vim's `!` command (which lets you call external programs) to encrypt blocks of text without encrypting entire files.
author: Patrick Steadman and Robert Jensen
published: true
---

Keeping your notes in a public GitHub repo is a good way to share useful
information.  But, there are probably a few things that you'd like to keep
encrypted for various reasons.  Here's how to leverage GPG and vim's `!` command
(which lets you call external programs) to encrypt blocks of text without
encrypting entire files.

### TL;DR

This assumes you have `gpg` installed and on your path.

__To encrypt:__ select the plaintext with `V`, press `:`, and then enter the command `!gpg -ca`.  You will be prompted to set a password.

__To decrypt:__ select the PGP message with `V`, press `:`, and then enter the command `!gpg -qd`.  Enter in the password you set when encrypting.

### Encrypting

Select the text you'd like to encrypt in visual mode. (for example, select the
lines using `V`).

Then, type `:` to being entering a command, and `!gpg -ca`.   The `c` flag
instructs gpg to use symmetric, passphrase based encryption, and running this
command will prompt you for a password.  The `a` flag adds 'ascii armor' to
the encrypted text, so that the original plaintext will be replaced with this:

```
-----BEGIN PGP MESSAGE-----
Version: GnuPG v1

jA0EBwMCEXxPltvl7GJg0sBFAUFetQsNCNH9pgpKfP0b+YVcv4TKuH36riJJC2kB
kyKbT/pDoTWxfLsPAfFZOyGl37VeLuyPrzdu/OUiHaSMOCXtizI0mv6yd1ovVY4P
e/gQU7jDhlLJrVdU2fYV6qwAJLGi8lRuRbNzTdqNPw37jxA/YQN5IOYAenRFB2Sr
w2kgpkDwPcwT8IOc9J9ViH5Vinxmks2JhgrNdhw4DIB29+77N5ui09Vegkbud4Te
pAY4zNgVLRCR8Zg2+BX2ns4OyeIjt/eROquUqz0BItAK50mTSi1uQlkBfNZ8PSlH
wvKwAwhLIu4Y0OyYOCz26cxJR4EhSoZEy3ByY8kE6itI8BcgQqIW
=dbgJ
-----END PGP MESSAGE-----
```

### Decrypting

To decrypt, select the 'armored' block of text in visual mode, type `:` and
enter the command `!gpg -qd`, as above.  The `d` flag will decrypt the
visually selected text, and will prompt you for a password.  The `q` flag
prevents various other info from being printed.  Enter the password you entered
when encrypting, and the 'armored' PGP message will be replaced by your original
plaintext!

### Using Key

If you don't want to keep typing passwords to encrypt/decrypt files, you can use
your PGP key.

This assumes that you've already generated a keypair.

In order to avoid repeatedly specifying yourself as the recipient of the
'message', set yourself as the 'default recipient' by adding the following to
`~/.gnupg/gpg.conf`:

```
default-recipient <yourkeyid>
default-recipient-self
```

`<yourkeyid>` can be found with `gpg --list-keys`, it's the eight-character
value after the `/` in the second column.

Then, everything works the same, except that you encrypt the text
using `!gpg -ae` instead of `!gpg -ca`.  Decryption will work automatically with
`!gpg -qd`.

Keep in mind that you now need to make sure that you don't lose your private key!


### More

Ways to improve this functionality:

- create mappings to eliminate keystrokes
- use the built-in vim blowfish encryption
- automatically encrypt/decrypt all armored PGP blocks in a file with the same
  passphrase
