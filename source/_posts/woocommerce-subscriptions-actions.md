---
layout: post
title: "WooCommerce Order and Subscription Creation Actions"
date: 2021-01-04
category: Notes
lede: "Actions not firing on creation of subscriptions? Try these hooks and actions."
author: Patrick Steadman
published: true
---

### Actions not firing upon subscription creation? Try these actions and filters.

If you're using a WooCommerce plugin like [Cartflows](https://cartflows.com/), subscription
actions initialized using `woocommerce_checkout_subscription_created` may not fire. 
In the case of Cartflows, child orders created in Upsells or Downflows do not
trigger the aforementioned action, presumably because a unique checkout is not
occuring.

If you still need to trigger an action for creation of a Cartflow upsold
subscription, there is also an undocumented action `wcs_create_subscription`.
There is also a filter with the same name, you can check out the source
[here](https://github.com/wp-premium/woocommerce-subscriptions/blob/master/wcs-functions.php#L218).
It seems like this using this hook may be more robust than
`woocommerce_checkout_subscription_created` or the status change actions.

Example of usage:

```php
function on_subscription_created($subscription)
{
    // do action here
}
add_action( 'wcs_create_subscription', 'on_subscription_created', 1, 1 ); 
```

#### Note on Subscriptions Created via Admin

The `wcs_create_subscription` action will not fire for subscriptions created via
the admin interface. In order to trigger actions in admin, you must use the
stranglely-named `woocommerce_process_shop_order_meta`, and then add logic to confirm that
the order is a subscription. See this [stackoverflow](
https://stackoverflow.com/questions/19551694/woocommerce-need-hook-when-admin-manually-creates-order)
post for more information.
