SELECT b.address
    FROM balances as b
    inner JOIN (SELECT t.address FROM trades t WHERE block_height > 73300) AS recent
    ON b.address = recent.address
    GROUP BY b.address
        HAVING SUM(CASE
               WHEN denom = 'usdc' THEN amount * 0.000001
               WHEN denom = 'swth' THEN amount * 0.00000005
               WHEN denom = 'tmz' THEN amount * 0.003
               ELSE 0
           END) >= 500