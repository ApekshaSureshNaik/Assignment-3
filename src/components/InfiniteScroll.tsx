import React from 'react';
import { useInfiniteQuery } from 'react-query'


const fetchUsers = async ({ pageParam = 1 }) => {
    const res = await fetch(`https://hn.algolia.com/api/v1/{pageParam}`);
    return res.json();
}

