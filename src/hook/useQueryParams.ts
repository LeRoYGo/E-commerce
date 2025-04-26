import { useNavigate, useSearchParams } from 'react-router';
import { useEffect, useState, useCallback } from 'react';
import type { Params } from '../types';

export const useQueryParams = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState<Params>({});

  // Чтение параметров из URL
  useEffect(() => {
    const entries: Params = {};
    for (const [key, value] of searchParams.entries()) {
      entries[key] = value;
    }
    setParams(entries);
  }, [searchParams]);

  // Обновление параметров
  const updateParams = useCallback(
    (newParams: Params) => {
      const currentParams = new URLSearchParams(searchParams);

      Object.entries(newParams).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          currentParams.set(key, value);
        } else {
          currentParams.delete(key);
        }
      });

      navigate(`?${currentParams.toString()}`);
    },
    [navigate, searchParams],
  );

  return { params, updateParams };
};
