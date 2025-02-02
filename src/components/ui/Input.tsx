import React, { InputHTMLAttributes } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'; // サイズを指定するプロパティ
}

const Input: React.FC<InputProps> = ({ size = 'md', className = '', ...props }) => {
  // サイズに応じたクラスを設定
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',   // 小さいサイズ
    md: 'px-4 py-2 text-base',  // 中くらいのサイズ（デフォルト）
    lg: 'px-5 py-3 text-lg',    // 大きいサイズ
  };

  return (
    <input
      className={`rounded-lg border border-slate-200 placeholder:text-slate-400 duration-200 focus-visible:border-primary outline-none focus-visible:ring-2 ring-primary/20 ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
};

export default Input;