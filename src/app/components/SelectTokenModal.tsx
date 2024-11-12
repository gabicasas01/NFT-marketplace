import React from "react";

export enum TOKENS {
    USDC = "USDC",
}

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToken: (token: TOKENS) => void;
}

const TokenSelectModal: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelectToken,
}) => {
  if (!isOpen) return null;

  const availableTokens = [TOKENS.USDC]; // In the future, request from backend

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Select Payment Token</h2>
        <div className="flex flex-col space-y-3">
          {availableTokens.map((token) => (
            <button
              key={token}
              className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
              onClick={() => onSelectToken(token)}
            >
              {token}
            </button>
          ))}
        </div>
        <button
          className="mt-4 text-red-500 hover:underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TokenSelectModal;
