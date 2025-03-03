local M = {}

M.setup = function(opts)
  -- Store any user options if needed
  opts = opts or {}
  
  -- You could store options in a global variable if your TypeScript code needs them
  vim.g.ursala_options = opts
  
  -- Ensure the plugin is registered
  if vim.fn.exists('g:loaded_ursala_plugin') ~= 1 then
    -- Only run UpdateRemotePlugins if the plugin isn't already loaded
    vim.cmd('UpdateRemotePlugins')
  end
end

return M
